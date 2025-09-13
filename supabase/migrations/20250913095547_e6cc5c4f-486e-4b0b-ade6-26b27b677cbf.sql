-- Create tables for PDF documents and annotations
CREATE TABLE public.pdf_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  total_pages INTEGER DEFAULT 1,
  upload_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.pdf_documents ENABLE ROW LEVEL SECURITY;

-- Create policies for pdf_documents
CREATE POLICY "Users can view their own documents" 
ON public.pdf_documents 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own documents" 
ON public.pdf_documents 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own documents" 
ON public.pdf_documents 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own documents" 
ON public.pdf_documents 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create annotations table
CREATE TABLE public.annotations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  document_id UUID NOT NULL REFERENCES public.pdf_documents(id) ON DELETE CASCADE,
  page_number INTEGER NOT NULL,
  highlight_text TEXT NOT NULL,
  highlight_color TEXT NOT NULL DEFAULT 'yellow',
  position_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.annotations ENABLE ROW LEVEL SECURITY;

-- Create policies for annotations
CREATE POLICY "Users can view their own annotations" 
ON public.annotations 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own annotations" 
ON public.annotations 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own annotations" 
ON public.annotations 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own annotations" 
ON public.annotations 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates on pdf_documents
CREATE TRIGGER update_pdf_documents_updated_at
BEFORE UPDATE ON public.pdf_documents
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for automatic timestamp updates on annotations
CREATE TRIGGER update_annotations_updated_at
BEFORE UPDATE ON public.annotations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for PDF files
INSERT INTO storage.buckets (id, name, public) VALUES ('pdfs', 'pdfs', false);

-- Create storage policies for PDF uploads
CREATE POLICY "Users can upload their own PDFs" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'pdfs' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own PDFs" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'pdfs' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own PDFs" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'pdfs' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own PDFs" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'pdfs' AND auth.uid()::text = (storage.foldername(name))[1]);