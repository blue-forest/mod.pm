/*
 * mod.pm
 * Copyright © 2022-2023 Blue Forest
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import { serve } from "https://deno.land/std@0.140.0/http/server.ts"

const REPO_URL = "https://github.com/blue-forest/mod.pm/"
const REPO_BRANCH = "master"
const DOMAIN = "mod.pm"

function handler(req: Request): Response | undefined {
  if(req.headers.get("host") === `install.${DOMAIN}`) {
    return new Response(
      Deno.readTextFileSync("./install.sh"),
      { headers: { "content-type": "text/plain" } },
    )
  }
  return Response.redirect(`${REPO_URL}blob/${REPO_BRANCH}/README.md`, 301)
}

serve(handler)
