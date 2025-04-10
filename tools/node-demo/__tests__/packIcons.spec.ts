import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { PackIcons } from '../src/core'

describe('packIcons', () => {
  it('scan is ok', async () => {
    const root = resolve(import.meta.dirname, './test-project')
    const pi = PackIcons.create({
      dir: root,
      fileName: 'icon.ts',
      ignore: ['presets.dist', 'presets.node_modules'],
      // requires: ['@runafe/magic-system', '@runafe/formkit-naive-ui'],
      locals: [
        {
          dir: 'svg',
          name: 'ms',
          prefix: 'runa-ms',
          nonMonotonicIcons: ['run'],
        },
      ],
    })
    await pi.scan()

    expect(pi.config).toMatchInlineSnapshot(`
      {
        "dir": "/root/app/lamp/smart-heating/tools/pack-icons/__tests__/test-project",
        "fileName": "icon.ts",
        "ignore": [
          "presets.dist",
          "presets.node_modules",
        ],
        "includes": [
          "**/*.{vue,ts,tsx,js,jsx}",
        ],
        "locals": [
          {
            "dir": "svg",
            "name": "ms",
            "nonMonotonicIcons": [
              "run",
            ],
            "prefix": "runa-ms",
          },
        ],
        "outDir": "/root/app/lamp/smart-heating/tools/pack-icons/__tests__/test-project",
      }
    `)
    expect(pi.localCount).toBe(3)
    expect(pi.iconifyItems.length).toBe(2)
    expect(pi.iconifySet).toMatchInlineSnapshot(`
      Set {
        "material-symbols:perm-data-setting-outline-rounded",
        "lsicon:setting-outline",
      }
    `)

    expect(pi.localMap.size).toBe(1)
    expect(
      pi.getLocalIconSet('ms')?.export()?.icons.run,
    ).toMatchInlineSnapshot(`
      {
        "body": "<g fill="none"><defs><clipPath id="svgID0"><rect width="1440" height="900" rx="0"/></clipPath></defs><g clip-path="url(#svgID0)"><rect width="1440" height="900" fill="#F2F3F4" rx="0"/><rect width="1440" height="967" fill="#000" opacity=".2" rx="0"/><rect width="640" height="254" x="433" y="298.5" fill="#FFF" rx="8"/><circle cx="484" cy="352.932" r="6" fill="#1A68F0" fill-opacity=".4"/><circle cx="484" cy="358.932" r="3" fill="#1A68F0" fill-opacity=".6" transform="matrix(1 0 0 -1 0 711.864)"/></g></g>",
        "height": 12,
        "left": 478,
        "top": 346.932,
        "width": 12,
      }
    `)
  })
})
