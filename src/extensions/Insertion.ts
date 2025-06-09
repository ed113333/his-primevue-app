import { Mark, mergeAttributes } from '@tiptap/core'
import type { CommandProps } from '@tiptap/core'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    setInsertion: (attributes: { user: string }) => ReturnType
    unsetInsertion: () => ReturnType
  }
}

export const Insertion = Mark.create({
  name: 'insertion',
  addAttributes() {
    return {
      user: {
        default: null,
      },
    }
  },
  parseHTML() {
    return [
      {
        tag: 'span[data-insertion]',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    const user = HTMLAttributes.user || 'unknown'
  return [
    'span',
    mergeAttributes(
      {
        'data-insertion': 'true',
        style: 'color: green; background-color: #e6ffe6;',
        title: `新增者：${user}`, // hover 顯示用戶名稱
      },
      HTMLAttributes
    ),
    0,
  ]
},
  addCommands() {
    return {
      setInsertion:
        (attributes: { user: string }) =>
        ({ commands }: CommandProps) => {
          return commands.setMark(this.name, attributes)
        },
      unsetInsertion:
        () =>
        ({ commands }: CommandProps) => {
          return commands.unsetMark(this.name)
        },
    }as any
  },
})