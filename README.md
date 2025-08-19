# The Startup NextJS Frontend App

<img width="960" height="540" alt="Image" src="https://github.com/user-attachments/assets/074d4a93-25da-4e76-b701-54f5a5c3013a" />

The ultimate landing page template for your startup. A modern, responsive landing page built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/). Perfect for startups, SaaS products, and tech companies looking to showcase their products with style.

They say dark themed websites convert more users (I didn't fact check that, but someone on Twitter said it so I'll assume it's true).

Now I'm not going to do the research myself, but companies like Linear and Resend have definitely made dark, spacey websites a staple of modern web design.

So, I built my own version!

This template contains landing and authentication pages built with ReactJS on top of NextJS, TailwindCSS, and Framer Motion. You'll find downloads for both JavaScript and TypeScript.

I opted to stick with the NextJS pages router to keep it simple for anyone new to NextJS or wanting to migrate this template out of the framework.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Beautiful Animations**: Smooth animations powered by Framer Motion
- **Startup-Focused Design**: Tailored specifically for startup and SaaS landing pages
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Interactive Elements**: Hero animations, feature grids, and engaging UI components
- **Dark Theme**: Beautiful dark theme with zinc color palette
- **Performance Optimized**: SEO-friendly with optimized fonts and images
- **Easy Configuration**: Setup takes minutes with modern tooling
- **Authentication Pages**: Ready-to-use sign-in and authentication flows

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with Pages Router
- **Styling**: Tailwind CSS with custom animations
- **Animation**: Framer Motion for smooth interactions
- **Typography**: Optimized font loading
- **Icons**: React Icons library
- **Development**: TypeScript, ESLint, Prettier

## 📦 Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bforbilly24/productstartup-nextjs-frontend-app.git
cd productstartup-nextjs-frontend-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

## 📁 Project Structure

```
productstartup-nextjs-frontend-app/
├── 📁 src/
│   ├── pages/                 # Next.js Pages Router
│   │   ├── _app.tsx          # App wrapper
│   │   ├── _document.tsx     # Document with SEO meta tags
│   │   ├── index.tsx         # Home page
│   │   └── signin.tsx        # Authentication page
│   ├── components/           # Reusable components
│   │   ├── buttons/          # Button components
│   │   ├── cta/             # Call-to-action sections
│   │   ├── customers/       # Customer testimonials
│   │   ├── features/        # Feature showcase components
│   │   ├── footer/          # Footer component
│   │   ├── hero/            # Hero section
│   │   ├── logos/           # Logo displays
│   │   ├── navbar/          # Navigation components
│   │   ├── pricing/         # Pricing sections
│   │   ├── signin/          # Authentication components
│   │   └── utils/           # Utility components
│   └── styles/              # Global styles
│       └── globals.css      # Global CSS with Tailwind
├── 📁 public/               # Public assets
│   ├── favicon/             # Favicon and PWA icons
│   ├── favicon.ico
│   ├── logo.svg
│   ├── next.svg
│   └── vercel.svg
├── 📄 package.json
├── 📄 tailwind.config.ts
├── 📄 next.config.mjs
└── 📄 tsconfig.json
```

## 🎨 Components

This project includes various pre-built components:

- **Hero Section**: Eye-catching startup hero with animations and call-to-action
- **Feature Grid**: Interactive grid showcasing key features and benefits
- **Customer Testimonials**: Social proof with customer reviews and ratings
- **Pricing Section**: Pricing plans with smooth animations
- **Logo Showcase**: Partner and client logos display
- **CTA Sections**: Multiple call-to-action components
- **Navigation**: Responsive navbar with smooth scroll animations
- **Authentication**: Sign-in and authentication pages
- **Footer**: Comprehensive footer with links and information
- **Utility Components**: Reusable UI elements and animations

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## ⚙️ Configuration

### Customizing Content
- Edit landing page sections in `src/pages/index.tsx`
- Modify authentication pages in `src/pages/signin.tsx`
- Update navigation in `src/components/navbar/`
- Customize components in their respective directories

### Styling
- Modify `tailwind.config.ts` for custom colors and design tokens
- The project uses a zinc color palette for the dark theme
- Global styles are in `src/styles/globals.css`
- Component-specific styles use Tailwind utility classes

### SEO and Meta Tags
- SEO meta tags are configured in `src/pages/_document.tsx`
- PWA manifest is in `public/favicon/site.webmanifest`
- Favicon and app icons are in `public/favicon/`

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library for React

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbforbilly24%2Fproductstartup-nextjs-frontend-app)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Other Deployment Options

You can also deploy this application on:
- **Netlify**: Connect your Git repository for automatic deployments
- **AWS Amplify**: Full-stack deployment with hosting and backend services
- **Railway**: Simple deployment with Git integration
- **DigitalOcean App Platform**: Container-based deployment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Halim Putra**

- GitHub: [@bforbilly24](https://github.com/bforbilly24)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/bforbilly24/productstartup-nextjs-frontend-app/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!
