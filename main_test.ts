import { assertEquals } from 'https://deno.land/std@0.202.0/assert/mod.ts'
import { res, md, octokit } from './main.ts'

const testRes = await octokit.request('GET /user', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

Deno.test(function addTest() {
  assertEquals(res.data.login, 'modster')
  assertEquals(md.data, '<p>Hello <strong>world</strong></p>\n')
  assertEquals(testRes.data.hireable, true)
})
