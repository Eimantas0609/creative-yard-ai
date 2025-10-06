-- Task 6: Seed Initial Data for Testing

-- Insert sample projects
INSERT INTO public.projects (title, slug, category, year, description, summary, thumb_url, status, created_at) VALUES
('E-Commerce Platform', 'ecommerce-platform', 'Web Development', '2024', 
 'A modern e-commerce platform with seamless user experience and robust backend.', 
 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', 
 'published', NOW() - INTERVAL '10 days'),

('Brand Identity Design', 'brand-identity-design', 'Branding', '2024', 
 'Complete brand identity for a sustainable fashion startup.', 
 'Logo design, brand guidelines, color palette, typography, and marketing materials.',
 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop', 
 'published', NOW() - INTERVAL '20 days'),

('Mobile Banking App', 'mobile-banking-app', 'Mobile Design', '2023', 
 'Intuitive mobile banking application with focus on security and UX.', 
 'iOS and Android app design with biometric authentication and real-time transaction tracking.',
 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop', 
 'published', NOW() - INTERVAL '30 days'),

('Restaurant Website', 'restaurant-website', 'Web Development', '2023', 
 'Beautiful website for a fine dining restaurant with online reservations.', 
 'Responsive website with menu showcase, table booking system, and gallery.',
 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop', 
 'published', NOW() - INTERVAL '40 days'),

('Fitness Tracker App', 'fitness-tracker-app', 'Product Design', '2023', 
 'Comprehensive fitness tracking app with social features.', 
 'Workout logging, nutrition tracking, progress visualization, and community challenges.',
 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop', 
 'published', NOW() - INTERVAL '50 days'),

('Portfolio Redesign', 'portfolio-redesign', 'Web Design', '2024', 
 'Modern portfolio redesign for a creative agency.', 
 'Clean, minimal design showcasing work with smooth animations and transitions.',
 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop', 
 'published', NOW() - INTERVAL '5 days');

-- Insert sample blog posts
INSERT INTO public.posts (title, slug, category, excerpt, content, cover_url, read_time, status, published_at, created_at) VALUES
('The Future of Web Design in 2024', 'future-web-design-2024', 'Design', 
 'Exploring emerging trends and technologies shaping the future of web design.',
 'Web design continues to evolve rapidly. In 2024, we''re seeing incredible innovations in AI-powered design tools, immersive 3D experiences, and accessibility-first approaches. This article explores the key trends that are defining modern web design.',
 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop', 
 '5 min read', 'published', NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days'),

('Building Scalable React Applications', 'building-scalable-react-apps', 'Development', 
 'Best practices and patterns for building maintainable React applications at scale.',
 'React has become the go-to library for building modern web applications. However, as applications grow, maintaining code quality becomes challenging. Learn about architectural patterns, state management strategies, and performance optimization techniques.',
 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop', 
 '8 min read', 'published', NOW() - INTERVAL '10 days', NOW() - INTERVAL '10 days'),

('Color Psychology in Branding', 'color-psychology-branding', 'Branding', 
 'Understanding how colors influence emotions and drive brand perception.',
 'Colors play a crucial role in brand identity. They evoke emotions, influence decisions, and create lasting impressions. Discover how to choose the right color palette for your brand.',
 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop', 
 '6 min read', 'published', NOW() - INTERVAL '15 days', NOW() - INTERVAL '15 days'),

('Mastering CSS Grid Layout', 'mastering-css-grid', 'Development', 
 'A comprehensive guide to creating complex layouts with CSS Grid.',
 'CSS Grid revolutionized web layouts. This guide covers everything from basic concepts to advanced techniques for creating responsive, flexible layouts.',
 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop', 
 '7 min read', 'published', NOW() - INTERVAL '20 days', NOW() - INTERVAL '20 days');

-- Insert services
INSERT INTO public.services (title, description, icon, price_range, order_index, features) VALUES
('Brand Identity Design', 
 'Create a unique and memorable brand identity that resonates with your target audience.',
 'palette',
 '$2,000 - $5,000',
 1,
 '["Logo Design", "Brand Guidelines", "Color Palette & Typography", "Business Card Design"]'),

('Web Development', 
 'Build modern, responsive websites with cutting-edge technologies and best practices.',
 'globe',
 '$3,000 - $10,000',
 2,
 '["Custom Website Development", "Responsive Design", "SEO Optimization", "Performance Tuning"]'),

('Mobile App Design', 
 'Design intuitive and beautiful mobile applications for iOS and Android platforms.',
 'smartphone',
 '$4,000 - $12,000',
 3,
 '["iOS & Android Design", "User Flow Mapping", "Prototyping & Testing", "App Store Assets"]'),

('Custom Development', 
 'Tailored development solutions for unique business requirements and workflows.',
 'code',
 '$5,000 - $20,000',
 4,
 '["Custom Features", "API Integration", "Third-party Services", "Database Design"]'),

('UI/UX Design', 
 'Create delightful user experiences through research, design, and iterative testing.',
 'sparkles',
 '$2,500 - $8,000',
 5,
 '["User Research", "Wireframing", "Visual Design", "Usability Testing"]'),

('Consulting & Strategy', 
 'Strategic guidance for your digital products and business transformation initiatives.',
 'users',
 '$1,500 - $5,000',
 6,
 '["Digital Strategy", "UX Audit", "Technical Consulting", "Growth Planning"]');