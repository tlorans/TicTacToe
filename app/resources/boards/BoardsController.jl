module BoardsController
  using Genie.Renderer.Html 


  function index()
    html(:boards, :index)
  end

end
