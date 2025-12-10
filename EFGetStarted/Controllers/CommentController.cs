using System.Data.Common;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CommentsController : ControllerBase {
    private readonly AppDbContext _context;


    public CommentsController (AppDbContext context) 
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<List<Comment>> GetComments()
    {
        var comments = _context.Comments.ToList();
        return comments;
    }

    [HttpPost]
    public ActionResult<Comment> CreateComment(int ArticleId,[FromBody] Comment comment)
    {
        _context.Comments.Add(comment);
        _context.SaveChanges();
        return comment;
    }

    [HttpGet("{id}")]
    public ActionResult<Comment> GetComment(int id)
    {
        var comment = _context.Comments.Find(id);
        if (comment == null)
        {
            return NotFound();
        }
        return comment;
    }
}