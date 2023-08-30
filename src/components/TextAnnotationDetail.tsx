/* eslint-disable react/jsx-max-depth */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  type CSSProperties,
  type ReactElement,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
  // lazy, Suspense
} from 'react';
import { Checkbox } from '@mui/material';
// import * as JSX from 'react/jsx-runtime';
import TextAnnotationLine from './TextAnnotationLine';
import styleModule from '../style/TextAnnotation.module.scss';
// eslint-disable-next-line camelcase
import { unstable_batchedUpdates } from 'react-dom';
import {
  useTypedSelector
} from '@/store';
interface TextAnnotationDetailProps {
  readonly classNameString?: string;
  readonly text: string;
}
// const { Checkbox } = MaterialUI;
// eslint-disable-next-line react/display-name
const TextAnnotationDetail = forwardRef((props: TextAnnotationDetailProps, ref): ReactElement => {

  const { FONTSIZE, MODE } = useTypedSelector((state) => state),
    isDEV = MODE === 'dev',
    zero = 0,
    // eslint-disable-next-line sort-vars, no-magic-numbers, @typescript-eslint/no-magic-numbers, @typescript-eslint/prefer-readonly-parameter-types
    computedStyle = (current: HTMLDivElement, str: 'fontSize' | 'height'): number => ~~getComputedStyle(current)[str].slice(zero, -2),
    // eslint-disable-next-line sort-vars
    divRef = useRef<HTMLDivElement>(null),
    // eslint-disable-next-line sort-vars
    getLineNum = (): number => {

      const { current } = divRef;
      if (!current) {

        return zero;

      }
      // eslint-disable-next-line one-var
      const fontSize = computedStyle(current, 'fontSize'),
        height = computedStyle(current, 'height'),
        // eslint-disable-next-line no-magic-numbers, @typescript-eslint/no-magic-numbers
        onePointfourfontSize = 1.4 * fontSize,
        // eslint-disable-next-line no-magic-numbers, @typescript-eslint/no-magic-numbers
        result = Math.round(height / (onePointfourfontSize - 1.6));
      return result;

    },
    [
      lineNum,
      setLineNum
    ] = useState(
      zero
    ),
    {
      classNameString = '',
      text = ''
    } = props,
    [
      isEditing,
      setIsEditing
    ] = useState(false);
  useEffect(() => {

    const { current } = divRef;
    if (current) {

      current.innerHTML = text;

    }

  }, [text]);
  useImperativeHandle(ref, () => ({
    'innerHTML': divRef.current?.innerHTML,
    isEditing
  }), [isEditing]);
  return (
    <div
      className={styleModule[classNameString]}
    >
      {isDEV
        ? <>
          <Checkbox
            checked={isEditing}
            onChange={(): void => {

              unstable_batchedUpdates(() => {

                setIsEditing(!isEditing);
                setLineNum(getLineNum());

              });
              const { current } = divRef;
              if (current && !isEditing) {

                // ?.replace(/	/ug, '&nbsp;&nbsp;')
                // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
                const res = [...current.childNodes].map((item) => `<p>${item.textContent === ''
                  ? '&nbsp;'
                  : item.textContent ?? '&nbsp;'}</p>`).join('');
                // current.innerHTML = '';
                // setText(res || []);
                current.innerHTML = res;

              }

            }}
          />
          当前状态：

          {isEditing
            ? '编辑'
            : '只读'}
        </>
        : null}

      <div
        style={{
          '--fontSize': FONTSIZE,
          '--isDEV': isDEV
            ? 'solid'
            : 'none'
        } as CSSProperties}
      >
        {isDEV
          ? <TextAnnotationLine
            classNameString="textAnnotationSide-left"
            lineNum={lineNum}
          />
          : null}

        <div
          className={styleModule['text-annotation-text']}
          contentEditable={isEditing}
          ref={divRef}
        />

        {isDEV
          ? <TextAnnotationLine
            classNameString="textAnnotationSide-right"
            lineNum={lineNum}
          />
          : null}
      </div>
    </div >
  );

});
TextAnnotationDetail.defaultProps = {
  'classNameString': ''
};
TextAnnotationDetail.prototype = {
  'classNameString': PropTypes.string
};
export default TextAnnotationDetail;
