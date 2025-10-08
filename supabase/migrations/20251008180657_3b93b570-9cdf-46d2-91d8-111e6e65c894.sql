-- Fix RLS policies for contacts table to ensure only admins can view submissions
-- This addresses the security finding about potential unauthorized access to contact data

-- First, drop the existing SELECT policy to recreate it with explicit security
DROP POLICY IF EXISTS "Admins can view all contacts" ON public.contacts;

-- Create a strict RESTRICTIVE policy that ONLY allows authenticated admin users to view contacts
-- Using RESTRICTIVE ensures this policy must pass (cannot be bypassed by other policies)
CREATE POLICY "Only admins can view contacts"
ON public.contacts
AS RESTRICTIVE
FOR SELECT
TO authenticated
USING (
  public.is_admin()
);

-- Ensure the contacts table has RLS enabled (should already be enabled, but being explicit)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Add additional security: Force RLS even for table owner
ALTER TABLE public.contacts FORCE ROW LEVEL SECURITY;