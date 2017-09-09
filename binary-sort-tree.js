const BinarySortTree = function () {

  const Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  // 根节点
  var root = null
  
  // 节点插入方法
  const _insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode
      } else {
        _insertNode(node.left, newNode)
      }
    } else if (newNode.key > node.key) {
      if (!node.right) {
        node.right = newNode
      } else {
        _insertNode(node.right, newNode)
      }
    }
  }

  this.insertNode = function (key) {
    const node = new Node(key)
    if (!root) {
      root = node
    } else {
      _insertNode(root, node)
    }
  }
}

const nodes = [8, 3, 10, 6, 14, 4, 9, 10, 12]
const binarySortTree = new BinarySortTree()

nodes.forEach(function(key) {
  binarySortTree.insertNode(key)
})



