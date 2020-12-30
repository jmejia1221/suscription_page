import React from 'react';

// CSS
import styles from './SettingList.module.scss';

const SettingList = (props) => {
    let classSelected = [styles['list']];
    let listed = props.list.map((item, i) => {
        if (item.value === props.selectedItem) {
            classSelected.push(styles['active']);
        } else {
            classSelected.splice(1, 1);
        }
        return (
            <li
                onClick={() => props.changeItemHandler(item.value)}
                className={classSelected.join(' ')}
                key={i}>{item.name}</li>
        );
    });
    return (
        <>{listed}</>
    )
} 

export default SettingList