<></>;function render() {

    let b = 7;
    let d = 5;
    let e = 5;
;
<>
<div>
    <slot a={b}>Hello</slot>
    <slot name="test" c={d} e={e}></slot>
</div></>
return { props: {}, slots: {default: {a:b}, test: {c:d, e:e}} }}

export default class {
    $$prop_def = render().props
    $$slot_def = render().slots
}