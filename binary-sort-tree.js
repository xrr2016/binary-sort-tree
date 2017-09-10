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
  const _inOrderTraverseNode = function (node, callback) {
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
  const _preOrderTraverseNode = function (node, callback) {
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
  // 最小节点
  const _min = function (node, callback) {
    if (node) {
      while (node.left) {
        node = node.left
      }
      !!callback && callback(node.key)
      return node.key
    }
    return null
  }
  this.min = function (callback) {
    return _min(root, callback)
  }
   // 最大节点
   const _max = function (node, callback) {
    if (node) {
      while (node.right) {
        node = node.right
      }
      !!callback && callback(node.key)
      return node.key
    }
    return null
  }
  this.max = function (callback) {
    return _max(root, callback)
  }
  // 特定值查找
  const _search = function (node, key, callback) {
    if (!node) { return false }
    if (key < node.key) {
      return _search(node.left, key, callback)
    } else if (key > node.key) {
      return _search(node.right, key, callback)
    } else {
      !!callback && callback(node.key)
      return true
    }
  }
  this.search = function (key, callback) {
    return _search(root, key, callback)
  }
}

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
const binarySortTree = new BinarySortTree()

nodes.forEach(function(key) {
  binarySortTree.insertNode(key)
})

const cb = function (key) {
  console.log(key)
}

// binarySortTree.inOrderTraverse(cb)
// binarySortTree.preOrderTraverse(cb)
// binarySortTree.posOrderTraverse(cb)
// console.log('Min is', binarySortTree.min())
// console.log('Max is', binarySortTree.max())
console.log(binarySortTree.search(7))
console.log(binarySortTree.search(20))







