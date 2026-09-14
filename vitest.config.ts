import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    env: {
      /**
       * Exporter retries wait between attempts (see src/utils/retry.ts). The
       * suite drives them against mocked fetch and MQTT clients, so there is
       * nothing to wait for and the real backoff would add roughly a minute
       * across the failure-path tests. A test that is ABOUT the backoff sets
       * its own delay through withRetry's options.
       */
      BLE_RETRY_BASE_DELAY_MS: '0',
    },
  },
});
