#!/usr/bin/env node
'use strict'
import { run } from '../dist/cli.mjs'

// eslint-disable-next-line import/newline-after-import
;(async () => {
  await run()
})()
