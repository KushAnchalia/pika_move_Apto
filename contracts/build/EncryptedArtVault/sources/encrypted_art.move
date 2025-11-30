module aivault::encrypted_art {
    use std::signer;
    use std::string;
    use aptos_framework::event;
    use aptos_framework::timestamp;

    /// Mark the struct as a module event
    #[event]
    struct UploadProofEvent has drop, store {
        user: address,
        encrypted_hash: string::String,
        encryption_key_hash: string::String,
        ai_generated_hash: string::String,
        timestamp: u64,
    }

    /// Upload encrypted file proof
    public entry fun upload_proof(
        user: &signer,
        encrypted_hash: string::String,
        encryption_key_hash: string::String,
        ai_generated_hash: string::String,
    ) {
        let addr = signer::address_of(user);
        let ts = timestamp::now_microseconds();
        event::emit<UploadProofEvent>(UploadProofEvent {
            user: addr,
            encrypted_hash,
            encryption_key_hash,
            ai_generated_hash,
            timestamp: ts,
        });
    }
}
