# Portfolio content sources

Descriptions summarize the supplied work links, repository source, and the
Surge AI role screenshot. Stack labels describe technologies verified in source;
they do not imply a particular project status, team size, or performance result.

- **Surge AI:** user-provided role screenshot (Agent Coding Benchmark Author,
  contract, August 2026–present, remote) and
  [sudo L7](https://surgehq.ai/blog/sudo-l7). Focus areas come from the screenshot;
  no programming-language stack is inferred from the benchmark's overall stack.
- **Tempo:** local `briankim-pitt/QueueMe` checkout at `/Users/brian/project`
  (`develop` branch). The current SwiftUI source and backend implementation are
  the basis for the description and stack:
  - `QueueMe/QueueMe/QueueMeApp.swift` and the SwiftUI views verify the native app.
  - `QueueMe/QueueMe/DiscoveryView.swift` implements recommendations and audio
    previews; `ChatView.swift`, `PhotoPostSheet.swift`, and `QueuePage.swift`
    implement messaging, photo posts, and the feed.
  - `api/app/views.py` exposes Django Ninja endpoints for song/photo posts,
    friends, Apple Music search, messaging, and personalized discovery.
  - `api/app/hybrid_recommendation_service.py` implements personalized discovery.
  - `api/app/models.py` defines posts, messages, conversations, and notifications.
  - `api/production_settings.py` configures PostgreSQL and Redis caching;
    `api/requirements.txt` verifies the Python backend dependencies.
  - `api/app/apple_music_service.py` and `api/app/apns_sender.py` implement
    Apple Music integration and push delivery.
  The root README still describes the earlier Flutter client, so the current
  SwiftUI implementation takes precedence. The portfolio links to the
  [product website](https://www.ourtempo.app); its preview card uses that site's
  public title and preview image.
- **AI Operations Assistant:**
  [README](https://github.com/briankim-pitt/AI-operations-assistant/blob/main/README.md),
  [dependencies](https://github.com/briankim-pitt/AI-operations-assistant/blob/main/pyproject.toml),
  [API and source citations](https://github.com/briankim-pitt/AI-operations-assistant/blob/main/app/main.py),
  and [generation](https://github.com/briankim-pitt/AI-operations-assistant/blob/main/app/generation.py).
- **WanderCart:**
  [SwiftUI app](https://github.com/briankim-pitt/ShoppingApp/blob/main/Shopping/Shopping/App/ShoppingApp.swift),
  [checkout](https://github.com/briankim-pitt/ShoppingApp/blob/main/docs/CHECKOUT.md),
  [wallet](https://github.com/briankim-pitt/ShoppingApp/blob/main/docs/ONBOARDING.md),
  and [worker dependencies](https://github.com/briankim-pitt/ShoppingApp/blob/main/worker/package.json).
  Product import, wishlist, and shipment-tracking screens are also present in
  the repository. Planned features in backlog documents are excluded.

Technology logos come from Simple Icons and are rendered as local inline SVGs.

Project logos are stored in `src/assets/project-logos/`. Tempo's wordmark is
copied from `/Users/brian/project/landing-page/public/TEMPO.png`. WanderCart's
SVG reproduces the mark geometry and wordmark arrangement from
`Shopping/Shopping/Core/Design/WanderCartLogoMark.swift` and
`AppPageTitleModifier.swift` in the local ShoppingApp checkout, including its
`#7b4dff` brand color.
