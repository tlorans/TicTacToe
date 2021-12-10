using Genie.Router
using BoardsController
using Genie.Renderer.Js


# route("/") do
#   serve_static_file("welcome.html")
# end

route("/", BoardsController.index)

# up(8000; open_browser = true)