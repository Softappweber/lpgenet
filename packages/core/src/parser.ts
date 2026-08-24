interface FileStructure {
  path: string
  content: string
}

export function parseStructure(json: any): FileStructure[] {
  if (!json || !json.files || !Array.isArray(json.files)) {
    throw new Error('Invalid structure: missing files array')
  }

  return json.files.map((file: any) => {
    if (!file.path || file.content === undefined) {
      throw new Error('Invalid file entry: missing path or content')
    }
    return {
      path: file.path,
      content: file.content,
    }
  })
}

export function validatePaths(files: FileStructure[]): boolean {
  const paths = new Set()
  for (const file of files) {
    if (paths.has(file.path)) {
      throw new Error(`Duplicate path: ${file.path}`)
    }
    paths.add(file.path)
  }
  return true
}
