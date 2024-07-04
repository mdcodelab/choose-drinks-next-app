
export const middleware = (request)=> {
return Response.json({message: "hello there"})
}

export const config = {
    //matcher: "/about" - applies only to about route
    matcher: ["/about/:path*"] //add here more to apply only to the specific routes
}