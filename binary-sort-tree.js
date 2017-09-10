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

  // 中序遍历
  var _inOrderTraverseNode = function (node, callback) {
    if (node) {
      _inOrderTraverseNode(node.left, callback)
      callback(node.key)
      _inOrderTraverseNode(node.right, callback)
    }
  }
  this.inOrderTraverse = function (callback) {
    _inOrderTraverseNode(root, callback)
  }
  // 前序遍历
  var _preOrderTraverseNode = function (node, callback) {
    if (node) {
      callback(node.key)
      _preOrderTraverseNode(node.left, callback)
      _preOrderTraverseNode(node.right, callback)
    }
  }
  this.preOrderTraverse = function (callback) {
    _preOrderTraverseNode(root, callback)
  }
  // 后序遍历
  const _posOrderTraverseNode = function (node, callback) {
    if (node) {
      _posOrderTraverseNode(node.left, callback)
      _posOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  this.posOrderTraverse = function (callback) {
    _posOrderTraverseNode(root, callback)
  }
}

const nodes = [8, 3, 1, 6, 4, 7, 10, 14, 13]
const binarySortTree = new BinarySortTree()

nodes.forEach(function(key) {
  binarySortTree.insertNode(key)
})

const cb = function (key) {
  console.log(key)
}

// binarySortTree.inOrderTraverse(cb)
// binarySortTree.preOrderTraverse(cb)
binarySortTree.posOrderTraverse(cb)






