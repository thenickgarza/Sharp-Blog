using System.Data.Common;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ArticlesController : ControllerBase {
    private readonly AppDbContext _context;


    public ArticlesController (AppDbContext context) 
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<List<Article>> GetArticles()
    {
        var articles = _context.Articles.ToList();
        return articles;
    }

    [HttpPost]
    public ActionResult<Article> CreateArticle([FromBody] Article article)
    {
        _context.Articles.Add(article);
        _context.SaveChanges();
        return article;
    }

    [HttpGet("{id}")]
    public ActionResult<Article> GetArticle(int id)
    {
        var article = _context.Articles.Find(id);
        if (article == null)
        {
            return NotFound();
        }
        return article;
    }
}