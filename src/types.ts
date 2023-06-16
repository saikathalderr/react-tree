export interface TreeNode {
  id: string;
  name: string;
  children: TreeNode[];
}

export interface NodePayload {
  parentId: string;
  name: string;
}
