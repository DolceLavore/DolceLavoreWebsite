# Dolce Lavoré website

Static site. No build step.

## Update content
Edit `js/data.js`: menu, prices, events, reviews, FAQ answers, phone, hours, social links. Anything marked PLACEHOLDER is not real yet. Colors are variables at the top of `css/styles.css`. Add your own photos to `images/products`.

## Make it work
- **Ordering:** paste your ordering link into `orderUrl` in `data.js` and every ORDER button will use it.
- **Forms:** create a free form endpoint (e.g. Formspree) and paste its URL into `formEndpoint`. Until then forms say they are not connected.

## Publish on GitHub Pages
1. Create a GitHub repository and upload everything in this folder (`index.html` at the top level).
2. Repo **Settings → Pages**: Source = "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Add a file named `CNAME` containing `dolcelavore.com`.

## Connect dolcelavore.com
At your domain registrar's DNS settings:
- Four **A** records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- One **CNAME** record for `www` pointing to `YOUR-GITHUB-USERNAME.github.io`

Then in Settings → Pages enter `dolcelavore.com` and tick **Enforce HTTPS** once available (can take up to a day). Confirm these IPs in GitHub's current docs before applying.
