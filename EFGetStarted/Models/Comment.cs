public class Comment {
    public int CommentId { get; set; }
    public required string Content { get; set; }

    public int ArticleId { get; set; }

    public required Article Article { get; set; }
}