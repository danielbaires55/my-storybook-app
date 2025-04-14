
type UserCardProps = {
  name: string;
  email: string;
};

export const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px' }}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}