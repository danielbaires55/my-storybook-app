import React, { useState } from 'react';
import { Button } from './Button'; 

interface UserCardProps {
  name?: string;
  email?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name = "Anonimo", email = "N/A" }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    setConfirmed(true);
    setLoading(false);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", maxWidth: "300px" }}>
      <h3>{name}</h3>
      <p>{email}</p>

      {!confirmed ? (
        <Button
          label={loading ? "Conferma in corso..." : "Conferma"}
          onClick={handleConfirm}
          disabled={loading}
        />
      ) : (
        <p style={{ color: "green", marginTop: "1rem" }}>Utente confermato</p>
      )}
    </div>
  );
};
