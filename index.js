"use strict";
const Jungle = require("./node_modules/jungle-core/ts_src/jungle");
class DomCell extends Jungle.Cell {
    constructor(stuff) {
        super(stuff);
        stuff.domain = 'dom';
    }
    applyForm(form) {
        super.applyForm(form);
        let wrapped = document.createElement(form.elem);
        wrapped.
            this.elem = wrapped;
        this.addStrange('elem', wrapped);
    }
    attach(cell, key) {
        super.attach(cell, key);
        if (cell.elem instanceof HTMLElement) {
            cell.elem.appendChild(this.elem);
        }
    }
    detach(cell, key) {
        if (cell.elem instanceof HTMLElement) {
            cell.elem.removeChild(this.elem);
        }
    }
    addPrimative(value, key) {
        this.elem.setAttribute(key, value);
        super.addPrimative(value, key);
    }
}
exports.DomCell = DomCell;
Jungle.Core.addSubdomain('dom', new Jungle.Domain({
    object: DomCell
}));
let view = new DomCell({
    form: {
        elem: 'div',
        class: 'base-level'
    },
    anon: [
        {
            form: {
                elem: 'p',
                class: 'content'
            }
        }
    ]
});
view.prime();
window.onload = () => {
    document.getElementById('content').appendChild(view.elem);
};
