module BoardsController
  using Genie.Renderer.Html 
  using Genie.Renderer.Js

  function index()
    html(:boards, :index)
  end

end
