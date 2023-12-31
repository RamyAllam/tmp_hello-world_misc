import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { parse } from 'https://deno.land/std@0.168.0/flags/mod.ts';

const { args } = Deno;
const argPort = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8000;

serve({ hostname: "0.0.0.0", port: argPort }, (_req) => new Response("Hello, world"));
