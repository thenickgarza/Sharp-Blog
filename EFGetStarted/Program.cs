var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddDbContext<AppDbContext>();
builder.Services.AddControllers();
builder.Services.AddCors();

var app = builder.Build();

// CORS stuff
app.UseCors(policy => policy
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod());

// Configure middleware and routing
app.MapControllers();

app.Run();
