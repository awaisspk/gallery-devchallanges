import {styled} from '@stitches';
import React from 'react';
import Image, {ImageProps} from 'next/image';

const ImageContainer = styled('div', {
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '10px',

  '@bp2': {
    borderRadius: '20px',
  },
});

type Props = ImageProps & {
  Rowspan?: string;
  Colspan?: string;
};

export const LoadImage = (props: Props) => {
  const {src, Rowspan, Colspan, layout, ...rest} = props;
  return (
    <ImageContainer css={{gridRow: Rowspan, gridColumn: Colspan}}>
      <Image
        src={src}
        alt="image"
        layout={layout || 'fill'}
        objectFit="cover"
        {...rest}
      />
    </ImageContainer>
  );
};
