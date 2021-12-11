import {LoadImage} from '@components/LoadImage';
import {styled} from '@stitches';

const Grid = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: 'repeat(3,30vw)',
  gap: '10px',
  width: 'min(900px, 100%)',

  '@bp2': {
    gridTemplateRows: 'repeat(3,20vw)',
  },
});

export const Gallery = () => {
  return (
    <Grid>
      <LoadImage src="/images/photo1.png" Colspan="1" Rowspan="1" />
      <LoadImage src="/images/photo2.png" Colspan="2 / span 2" />
      <LoadImage src="/images/photo3.png" Colspan="1 / span 2" />
      <LoadImage src="/images/photo_4.png" Rowspan="2 / span 2" Colspan="3" />
      <LoadImage src="/images/photo5.png" />
      <LoadImage src="/images/photo6.png" />
    </Grid>
  );
};
