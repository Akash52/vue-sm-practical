export default async function (context) {
  const redirectUrl = await getUrlForRedirect(context.route.path);
  if (redirectUrl) {
    context.redirect(301, redirectUrl);
  }
}
