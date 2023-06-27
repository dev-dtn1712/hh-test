import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IPost } from '@/types';

interface PostCardProps {
  data: IPost;
}

const PostCard: React.FC<PostCardProps> = ({ data }) => {
  return (
    <Card variant="outlined" sx={{ minHeight: 150 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
