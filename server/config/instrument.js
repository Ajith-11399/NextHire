import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://1da15c937d4294a33e445e402b17f777@o4509915788607488.ingest.us.sentry.io/4509915797389312",
  // integrations: [nodeProfilingIntegration(), Sentry.mongooseIntegration()],
  integrations: [ Sentry.mongooseIntegration()],
  // tracesSampleRate: 1.0,
  // profileSessionSampleRate: 1.0,
  // profileLifecycle: "trace",
  // sendDefaultPii: true,
});

export default Sentry;