/**
 * 【原生JS实现树状结构列表】，若上级节点不存在，默认是放置在一级目录下
 * 参考网址：https://www.cnblogs.com/zuoWendong/p/13265549.html
 * @param Array data 源数组集
 * @param String id  当前元素节点id，默认id
 * @param String children  当前元素子节点名，默认children
 * @param String fatherId  当前元素节点父类id，默认fatherId
 * @returns Array   标准的树状结构数组
 */
 function arrayConvertTreeArray(data, id="id", children="children", fatherId="fatherId"){
    let map = {};
    // 返回的树状结构列表
    let treeArray = [];
    data.forEach((item) => {
        map[item[id]] = item;
    });
    data.forEach((item) => {
        let parent = map[item[pid]];
        if (parent) {
            (parent[children] || (parent[children] = [])).push(item);
        } else {
            treeArray.push(item);
        }
    });
    return treeArray;
}

let data = [{
        "id": "1",
        "name": "1",
        "pid": "0",
    },{
        "id": "2",
        "name": "1-1",
        "pid": "1"
    },{
        "id": "3",
        "name": "1-2",
        "pid": "1"
    },{
        "id": "4",
        "name": "1-1-1",
        "pid": "2"
    },{
        "id": "5",
        "name": "1-1-2",
        "pid": "2"
    },{
        "id": "6",
        "name": "2",
        "pid": "0"
    },{
        "id": "7",
        "name": "1-2-1",
        "pid": "3"
    },{
        "id": "8",
        "name": "1-2-1-1",
        "pid": "7"
    }
];

// 函数调用
arrayConvertTreeArray(data=data, id="id", children="children", fatherId="pid");