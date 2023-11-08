/*

*/
import { Octokit } from 'https://esm.sh/octokit@3.1.1?dts'
import { load } from 'https://deno.land/std@0.205.0/dotenv/mod.ts'

const env: Record<string, string> = await load()
export const pat: string = env['GITHUB_REST_API']

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   console.log()
// }

export const octokit = new Octokit({
  auth: pat,
})

export const res = await octokit.request('GET /user', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
})
console.log(res)

export const md = await octokit.request('POST /markdown', {
  text: 'Hello **world**',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
})
console.log(md)
