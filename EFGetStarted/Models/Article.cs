public class Article {
    public int ArticleId { get; set; }
    public required string Title { get; set; }
    public required string Content { get; set; }

    public List<Comment> Comments { get; } = new();
}