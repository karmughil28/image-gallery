# 16th HOLE — Image Collection

Premium React + Vite image collection inspired by the supplied reference design.

## Important: Node.js compatibility

This project is pinned to **Vite 5** because the latest Vite/Rollup releases require a newer Node.js runtime than Node 18.19.1.

Use Node.js **18.x** or newer (but below Node 21 for this pinned setup).

Check your version:

```bash
node -v
npm -v
```

## Fix / clean install

If you already ran `npm install` with the old package versions, run:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Or use the included repair script:

```bash
./fix.sh
```

## Run

```bash
npm install
npm run dev
```

Production build test:

```bash
npm run build
```

## Google Maps

1. Create a `.env` file in the project root.
2. Add:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_javascript_api_key
```

3. Enable **Maps JavaScript API** and **Places API** for the key in Google Cloud.
4. Restart Vite after changing `.env`.

The API key is read from the Vite environment variable and is not hard-coded in the React source.

## Features

- Responsive editorial/private-club visual design
- React Router pages: Home, Collection, Cart, Location, Login, Signup
- Live search while typing
- Category filters
- Reusable `ImageCard` component and props
- `map()` rendering from `src/data.js`
- Drag photographs into the collection drop zone
- Hover circular cursor effect
- Cart quantity/remove/total controls
- Cart persistence with `localStorage`
- Demonstration signup/login with `localStorage`
- Signup password validation using a regular expression, maximum 6 characters
- Google Maps search, map click, draggable marker, current location and Google Maps link
- No admin, delivery, or delivery-status pages
