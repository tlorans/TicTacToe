using Genie.Router
using BoardsController


# route("/") do
#   serve_static_file("welcome.html")
# end

route("/", BoardsController.index)