abaezab@mac-abaezab architecture-poc % LIKEC4_CONTAINER_NAME=architecture-poc-integration \
LIKEC4_PORT=5173 \
LIKEC4_HMR_PORT=24678 \
docker compose up -d

abaezab@mac-abaezab architecture-poc-architect-a % LIKEC4_CONTAINER_NAME=architecture-poc-architect-a \
LIKEC4_PORT=5174 \
LIKEC4_HMR_PORT=24679 \
docker compose up -d

abaezab@mac-abaezab architecture-poc-architect-b % LIKEC4_CONTAINER_NAME=architecture-poc-architect-b \
LIKEC4_PORT=5175 \
LIKEC4_HMR_PORT=24680 \
docker compose up -d