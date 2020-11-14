//  获取到的数据转为树结构
export const formRoterTree = function(data){
    //  获取最外层的路由
    let parents =data.filter(p => p.uuid === 0);
    //  获取第二层以内的路由
    let childrens = data.filter(c => c.uuid !== 0);

    dataToThree(parents,childrens)
    //  转为树结构
    function dataToThree(parents,childrens) {
        //  外层树结构
        parents.map(p => {
            //  内层树结构
            childrens.map((c,i)=>{
                if(c.uuid === p.id){
                    let _c = JSON.parse(JSON.stringify(childrens));
                    _c.splice(i,1)
                    dataToThree([c],_c)

                    //  生成树
                    if(p.children){
                        p.children.push(c)
                    }else{
                        p.children = [c]
                    }
                }
            })
        })
    }
    return parents;
}

//  转为真正的路由
export const generateRouters = function (userRouters){
    let newRoutes = userRouters.map(r => {
        //  生成路由
        let routes = {
            path:r.path,
            name:r.name,
            component:()=>import(`@/views/${r.name}.vue`)
        }

        //  生成内层路由
        if(r.children){
            routes.children = generateRouters(r.children)
        }
        return routes;
    })
    return newRoutes;
}