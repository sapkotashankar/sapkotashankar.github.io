import { Calendar, Clock } from "lucide-react";

interface BlogPostPreviewProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogPostPreview = ({
  title,
  excerpt,
  date,
  readTime,
  category,
}: BlogPostPreviewProps) => {
  return (
    <article className="bg-card border rounded-lg p-6 card-hover">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
          {category}
        </span>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 link-hover cursor-pointer">{title}</h3>
      <p className="text-muted-foreground">{excerpt}</p>
    </article>
  );
};

export default BlogPostPreview;
