import React from 'react';
import { connect } from 'react-redux';

import { getElementByType } from '../../../utils';
import { GROUP } from '../../../constants';

import ResizeWrapper from './ResizeWrapper';

/**
 * 
 *   合模式下： 顶层group 中间层group，底层component
  //    顶层group：无parentId，type类型是group，
  //    中间层group： 有parentId，type是group 有children
  //    底层Component： 有parentId， 无children
 */

function Element(props): React.ReactElement {
  const {
    id,
    index,
    style,
    item: { type, componentProps, containerProps, parentId },
    children,
  } = props;

  const Component = getElementByType(type);
  // 独立模式下的Component渲染

  if (!containerProps) {
    return null;
  }

  if (!parentId && !children) {
    return (
      <ResizeWrapper
        index={index}
        containerProps={containerProps}
        id={id}>
        <Component {...componentProps} />
      </ResizeWrapper>
    );
  }

  // 组合模式下顶层Group渲染

  if (!parentId && type === GROUP) {
    return (
      <ResizeWrapper
        index={index}
        containerProps={containerProps}
        id={id}>
        <Component
          {...componentProps}>
          {children}
          
        </Component>
      </ResizeWrapper>
    );
  }

  // 组合模式下 中间层group渲染

  if (parentId && type === GROUP && children && children.length > 0) {
    return (
      <div
        style={{
          position: 'absolute',
          cursor: 'move',
          ...containerProps.style,
          transform: `rotate(${containerProps.style.rotate}deg)`
        }}>
        {children}
      </div>
    );
  }

  // 组合模式下，内含的Component渲染
  if (parentId && !children) {

    return (
      <div
        style={{
          position: 'absolute',
          cursor: 'move',
          ...style,
          ...containerProps.style,
          transform: `rotate(${containerProps.style.rotate}deg)`
        }}>
        <Component {...componentProps} />
      </div>
    );
  }
}

export default connect(state => state)(Element);
