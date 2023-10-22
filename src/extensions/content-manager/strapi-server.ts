export default (plugin) => {
  let original = plugin.controllers['collection-types'].create;
  plugin.controllers['collection-types'].create = (ctx: any) => {
    const { model } = ctx.params;
    if (model === 'api::hot-movie.hot-movie') {
      console.log(ctx.params);
      console.log(ctx.query);
      console.log(ctx.request);
      console.log(ctx.state);
      return undefined;
    }
    // Do your thing
    // Call the original function
    return original(ctx);
  };

  return plugin;
};