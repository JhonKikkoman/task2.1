export default function IconSwitch(props) {
    return (
        <div className="container_switch">
            <span className="material_icons" onClick={props.onSwitch}>{props.icon === 'view_list' ? 'view_list' : 'view_module'}</span>
        </div>
    );
}