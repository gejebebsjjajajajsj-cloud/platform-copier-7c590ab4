-- Adicionar colunas de credenciais na tabela site_settings
ALTER TABLE public.site_settings
ADD COLUMN sync_client_id TEXT,
ADD COLUMN sync_client_secret TEXT;

-- Comentário
COMMENT ON COLUMN public.site_settings.sync_client_id IS 'Client ID do Sync Payments';
COMMENT ON COLUMN public.site_settings.sync_client_secret IS 'Client Secret do Sync Payments';