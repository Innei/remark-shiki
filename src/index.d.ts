import type { Plugin } from 'unified'
import type { Highlighter } from 'shiki'

declare namespace withShiki {
  interface Options {
    highlighter: Highlighter
    /** @default true */
    ignoreUnknownLanguage?: boolean
  }
}

declare const withShiki: Plugin<[withShiki.Options]>

export = withShiki
