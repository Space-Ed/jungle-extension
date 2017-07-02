import Jungle = require("./node_modules/jungle-core/ts_src/jungle")

export interface DomCellSpec {
    form:{
        elem:string;
        class?:string;
    };

    domain?:string;
    anon?:any[];
    [others:string]:any
}

export class DomCell extends Jungle.Cell {

    elem:HTMLElement;

    constructor(stuff:DomCellSpec){
        super(stuff)
        stuff.domain = 'dom'
    }

    applyForm(form){
        super.applyForm(form)
        let wrapped = document.createElement(form.elem);
        wrapped.

        this.elem = wrapped;
        this.addStrange('elem', wrapped);
    }

    //parent attachment
    attach(cell, key){
        super.attach(cell, key)
        if(cell.elem instanceof HTMLElement){
            (<HTMLElement>cell.elem).appendChild(this.elem)
        }
    }

    detach(cell, key){
        if(cell.elem instanceof HTMLElement){
            (<HTMLElement>cell.elem).removeChild(this.elem)
        }
    }

    addPrimative(value, key){
        this.elem.setAttribute(key, value)
        super.addPrimative(value, key)
    }

}

Jungle.Core.addSubdomain('dom', new Jungle.Domain({
    object:DomCell
}))

let view = new DomCell({
    form:{
        elem:'div',
        class:'base-level'
    },
    anon:[
        {
            form:{
                elem:'p',
                class:'content'
            }
        }
    ]
})

view.prime()

window.onload = ()=>{
    document.getElementById('content').appendChild(view.elem)
}

//
// let app = new DomCell({
//     __elem__:'div',
//     __content__:[
//         {
//             __elem__:'p',
//             __content__:"Hello World"
//         }
//     ]
// })
